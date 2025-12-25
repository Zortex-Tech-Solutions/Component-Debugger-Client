import React, { useState, useEffect } from 'react';
import { Search, Zap, Layers, RefreshCw, ChevronRight, ChevronDown, AlertCircle, CheckCircle } from 'lucide-react';

const ComponentDebugger = () => {
  const [framework, setFramework] = useState('react');
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  // Simulate component tree data
  const mockReactComponents = [
    {
      id: 'app-1',
      name: 'App',
      type: 'Component',
      props: { theme: 'dark', version: '1.0' },
      state: { isLoading: false, user: { name: 'John', role: 'admin' } },
      renderCount: 3,
      renderTime: '2.4ms',
      children: [
        {
          id: 'header-1',
          name: 'Header',
          type: 'Component',
          props: { title: 'Dashboard' },
          state: { isMenuOpen: false },
          renderCount: 2,
          renderTime: '0.8ms',
          children: []
        },
        {
          id: 'sidebar-1',
          name: 'Sidebar',
          type: 'Component',
          props: { collapsed: false },
          state: { activeItem: 'home' },
          renderCount: 5,
          renderTime: '1.2ms',
          children: [
            {
              id: 'nav-1',
              name: 'Navigation',
              type: 'Component',
              props: { items: ['Home', 'Profile', 'Settings'] },
              state: {},
              renderCount: 5,
              renderTime: '0.5ms',
              children: []
            }
          ]
        },
        {
          id: 'content-1',
          name: 'Content',
          type: 'Component',
          props: { fullWidth: true },
          state: { data: [1, 2, 3, 4, 5] },
          renderCount: 8,
          renderTime: '3.1ms',
          children: []
        }
      ]
    }
  ];

  const mockVueComponents = [
    {
      id: 'app-v1',
      name: 'App',
      type: 'Component',
      props: { mode: 'production' },
      state: { count: 42, items: ['a', 'b', 'c'] },
      renderCount: 4,
      renderTime: '2.1ms',
      children: [
        {
          id: 'layout-v1',
          name: 'MainLayout',
          type: 'Component',
          props: { fixed: true },
          state: { scrollY: 0 },
          renderCount: 4,
          renderTime: '1.5ms',
          children: []
        }
      ]
    }
  ];

  useEffect(() => {
    setComponents(framework === 'react' ? mockReactComponents : mockVueComponents);
    setExpandedNodes(new Set(['app-1', 'app-v1']));
  }, [framework]);

  const scanComponents = () => {
    setIsScanning(true);
    setTimeout(() => {
      setComponents(framework === 'react' ? mockReactComponents : mockVueComponents);
      setIsScanning(false);
    }, 800);
  };

  const toggleExpand = (id) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNodes(newExpanded);
  };

  const renderComponentTree = (component, depth = 0) => {
    const hasChildren = component.children && component.children.length > 0;
    const isExpanded = expandedNodes.has(component.id);
    const isSelected = selectedComponent?.id === component.id;

    if (searchTerm && !component.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return null;
    }

    return (
      <div key={component.id} style={{ marginLeft: depth * 20 }}>
        <div
          onClick={() => setSelectedComponent(component)}
          className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer transition-all ${
            isSelected ? 'bg-blue-600' : 'hover:bg-gray-800'
          }`}
        >
          {hasChildren && (
            <button onClick={(e) => { e.stopPropagation(); toggleExpand(component.id); }}>
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
          {!hasChildren && <div style={{ width: 16 }} />}
          <Layers size={16} className="text-blue-400" />
          <span className="font-mono text-sm">&lt;{component.name} /&gt;</span>
          <span className="text-xs text-gray-500 ml-auto">{component.renderTime}</span>
        </div>
        {isExpanded && hasChildren && (
          <div>
            {component.children.map(child => renderComponentTree(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const renderValue = (value, key) => {
    if (typeof value === 'object' && value !== null) {
      return (
        <div className="ml-4 border-l-2 border-gray-700 pl-3">
          {Object.entries(value).map(([k, v]) => (
            <div key={k} className="mb-1">
              <span className="text-purple-400">{k}:</span> {renderValue(v, k)}
            </div>
          ))}
        </div>
      );
    }
    return <span className="text-green-400">{JSON.stringify(value)}</span>;
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="text-blue-500" size={24} />
            <h1 className="text-xl font-bold">Component Debugger</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFramework('react')}
              className={`px-4 py-2 rounded transition-all ${
                framework === 'react' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              React
            </button>
            <button
              onClick={() => setFramework('vue')}
              className={`px-4 py-2 rounded transition-all ${
                framework === 'vue' ? 'bg-green-600' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              Vue
            </button>
            <button
              onClick={scanComponents}
              disabled={isScanning}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded transition-all flex items-center gap-2"
            >
              <RefreshCw size={16} className={isScanning ? 'animate-spin' : ''} />
              Scan
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Component Tree */}
        <div className="w-1/2 border-r border-gray-800 flex flex-col">
          <div className="p-3 border-b border-gray-800">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded px-10 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex-1 overflow-auto p-2">
            {components.map(component => renderComponentTree(component))}
          </div>
        </div>

        {/* Details Panel */}
        <div className="w-1/2 flex flex-col overflow-auto">
          {selectedComponent ? (
            <div className="p-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-blue-400">&lt;{selectedComponent.name} /&gt;</h2>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle size={14} />
                    Renders: {selectedComponent.renderCount}
                  </span>
                  <span>Time: {selectedComponent.renderTime}</span>
                </div>
              </div>

              {/* Props Section */}
              <div className="mb-6 bg-gray-900 rounded-lg p-4 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-yellow-400">Props</h3>
                <div className="font-mono text-sm">
                  {Object.keys(selectedComponent.props).length > 0 ? (
                    Object.entries(selectedComponent.props).map(([key, value]) => (
                      <div key={key} className="mb-2">
                        <span className="text-purple-400">{key}:</span> {renderValue(value, key)}
                      </div>
                    ))
                  ) : (
                    <span className="text-gray-500">No props</span>
                  )}
                </div>
              </div>

              {/* State Section */}
              <div className="mb-6 bg-gray-900 rounded-lg p-4 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-green-400">State</h3>
                <div className="font-mono text-sm">
                  {Object.keys(selectedComponent.state).length > 0 ? (
                    Object.entries(selectedComponent.state).map(([key, value]) => (
                      <div key={key} className="mb-2">
                        <span className="text-purple-400">{key}:</span> {renderValue(value, key)}
                      </div>
                    ))
                  ) : (
                    <span className="text-gray-500">No state</span>
                  )}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Performance</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Render Time:</span>
                    <span className="font-mono">{selectedComponent.renderTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Renders:</span>
                    <span className="font-mono">{selectedComponent.renderCount}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    {selectedComponent.renderCount > 5 ? (
                      <>
                        <AlertCircle size={16} className="text-yellow-500" />
                        <span className="text-yellow-500 text-xs">High render count detected</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle size={16} className="text-green-500" />
                        <span className="text-green-500 text-xs">Performance looks good</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Layers size={48} className="mx-auto mb-4 opacity-50" />
                <p>Select a component to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentDebugger;